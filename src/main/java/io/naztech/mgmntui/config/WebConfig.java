package io.naztech.mgmntui.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;

import ch.ralscha.extdirectspring.util.JsonHandler;

/**
 * Web Config
 * 
 * @author Tanbirul Hashan
 * @since 2019-04-23
 */

@Configuration
public class WebConfig {

	@Bean
	public JsonHandler jsonHandler(ObjectMapper objectMapper) {
		JsonHandler jh = new JsonHandler();
		jh.setMapper(objectMapper);
		return jh;
	}

}
