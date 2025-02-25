package CSF.day4_HW.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CSF.day4_HW.Model.Search;
import CSF.day4_HW.Service.GiphyService;
import jakarta.json.JsonObject;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class GiphyController {
    @Autowired private GiphyService giphyService;

    @GetMapping(path= "/giphy")
    @CrossOrigin(origins = "*")
    public ResponseEntity<JsonObject> getGiphy(@RequestParam String q, @RequestParam int limit, @RequestParam String rating){
        Search search = new Search();
        search.setQuery(q);
        search.setRating(rating);
        search.setLimit(limit);
        JsonObject result = giphyService.getGiphy(search);
        return ResponseEntity.ok(result);

    }
}
