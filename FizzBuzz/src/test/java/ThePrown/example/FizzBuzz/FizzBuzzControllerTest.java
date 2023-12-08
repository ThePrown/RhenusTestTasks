package ThePrown.example.FizzBuzz;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(SpringExtension.class)
@WebMvcTest
public class FizzBuzzControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    private FizzBuzzService fizzBuzzService;

    @Test
    void getEndpoint() throws Exception {
        ArrayList mockResult = new ArrayList<>(Arrays.asList("FizzBuzz"));

        when(fizzBuzzService.FizzBuzz(20)).thenReturn(mockResult);
        mockMvc.perform(get("/api/20"))
                .andExpect(status().isOk())
                .andExpect(content().json("[\"FizzBuzz\"]"));
    }
}
