public class Temperature {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);

      System.out.print("Enter the temperature in Fahrenheit: ");
      double fahrenheit = scanner.nextDouble();

      double celsius = (5.0 / 9.0) * (fahrenheit - 32);

      System.out.println("The temperature in Celsius is: " + celsius);
  }
}
