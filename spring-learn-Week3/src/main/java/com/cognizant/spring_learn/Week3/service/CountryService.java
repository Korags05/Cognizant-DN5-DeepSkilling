package com.cognizant.spring_learn.Week3.service;

import java.util.List;

import com.cognizant.spring_learn.Week3.model.Country;
import com.cognizant.spring_learn.Week3.model.CountryList;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry(String code) {

        try {

            JAXBContext context =
                    JAXBContext.newInstance(CountryList.class);

            Unmarshaller unmarshaller =
                    context.createUnmarshaller();

            CountryList countryList =
                    (CountryList) unmarshaller.unmarshal(
                            new ClassPathResource("country.xml").getFile());

            List<Country> countries =
                    countryList.getCountry();

            return countries.stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElse(null);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
