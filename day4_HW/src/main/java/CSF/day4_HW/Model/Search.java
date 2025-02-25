package CSF.day4_HW.Model;

public class Search {
    private String query;
    private int limit;
    private int offset;
    private String rating;
    private String lang;
    private String bundle;

    public Search(){
        this.limit = 0;
        this.lang = "en";
        this.bundle = "messaging_non_clips";
    }
    public String getQuery() {
        return query;
    }
    public void setQuery(String query) {
        this.query = query;
    }
    public int getLimit() {
        return limit;
    }
    public void setLimit(int limit) {
        this.limit = limit;
    }
    public int getOffset() {
        return offset;
    }
    public void setOffset(int offset) {
        this.offset = offset;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
    public String getLang() {
        return lang;
    }
    public void setLang(String lang) {
        this.lang = lang;
    }
    public String getBundle() {
        return bundle;
    }
    public void setBundle(String bundle) {
        this.bundle = bundle;
    }


    
    
    
}
