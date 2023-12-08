package ThePrown.example.FizzBuzz;

import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class FizzBuzzService {
    public ArrayList<String> FizzBuzz(int number) {
        ArrayList<String> result = new ArrayList<>();

        //Iterate Values
        for(int i = 1; i <= number; i++) {
            result.add(SingleFizzBuzz(i));
        }

        return result;
    }

    public String SingleFizzBuzz(int number) {
        String result = "";

        //Check Divisibility
        if(number % 3 == 0) {
            result += "Fizz";
        }
        if(number % 5 == 0) {
            result += "Buzz";
        }

        if(result == "") {
            return String.valueOf(number);
        } else {
            return result;
        }
    }
}
