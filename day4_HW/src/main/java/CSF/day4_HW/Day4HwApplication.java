package CSF.day4_HW;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Day4HwApplication {

	public static void main(String[] args) {
		SpringApplication.run(Day4HwApplication.class, args);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new EnableCORS("/api/*", "*");
	}
}
