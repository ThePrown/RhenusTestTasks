package ThePrown.example.FizzBuzz;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class FizzBuzzServiceTest {

    @InjectMocks
    private FizzBuzzService fizzBuzzService;

    @Test
    void testSingleFizzBuzz() {
        //Test Fizz
        assertEquals("Fizz", fizzBuzzService.SingleFizzBuzz((3)));
        //Test Buzz
        assertEquals("Buzz", fizzBuzzService.SingleFizzBuzz((5)));
        //Test FizzBuzz
        assertEquals("FizzBuzz", fizzBuzzService.SingleFizzBuzz((15)));
        //Test Neither
        assertEquals("7", fizzBuzzService.SingleFizzBuzz((7)));
    }

    @Test
    void testFizzBuzz() {
        ArrayList<String> expectedResult = new ArrayList<>(Arrays.asList("1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"));
        assertEquals(expectedResult, fizzBuzzService.FizzBuzz(15));
    }
}
