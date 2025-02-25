package CSF.day4_HW.Service;

import java.io.StringReader;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import CSF.day4_HW.Model.Search;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@Service
public class GiphyService {
    private final String GIPHY_URL = "https://api.giphy.com/v1/gifs/search";

    @Value("${api.key}")
    private String API_KEY;

    public JsonObject getGiphy(Search search) {
        String urlWithParams = UriComponentsBuilder.fromUriString(GIPHY_URL)
                .queryParam("api_key", API_KEY)
                .queryParam("q", search.getQuery())
                .queryParam("limit", search.getLimit())
                .queryParam("offset", search.getOffset())
                .queryParam("rating", search.getRating())
                .queryParam("lang", search.getLang())
                .queryParam("bundle", search.getBundle())
                .toUriString();
        RestTemplate restTemplate = new RestTemplate();
        try {
            RequestEntity req = RequestEntity.get(urlWithParams).build();
            ResponseEntity<String> responseEntity = restTemplate.exchange(req, String.class);
            JsonReader jsonReader = Json.createReader(new StringReader(responseEntity.getBody()));
            return jsonReader.readObject();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return Json.createObjectBuilder().build();
    }
}
