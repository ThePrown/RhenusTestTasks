package ThePrown.example.FizzBuzz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class FizzBuzzController {

    private final FizzBuzzService fizzBuzzService;

    @Autowired
    public FizzBuzzController(FizzBuzzService fizzBuzzService) {
        this.fizzBuzzService = fizzBuzzService;
    }

    @GetMapping("/{number}")
    //Get Parameter from URL
    public ArrayList<String> getNumber(@PathVariable(value="number") int number) {
        return fizzBuzzService.FizzBuzz(number);
    }
}
