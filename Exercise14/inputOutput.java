import java.util.*; 
  
 // We are importing the package java.util 
  
 public class inputOutput { 
     public static void main(String[] args){ 
         // Output :- 
         // ln gives the new line character like \n :) 
         System.out.println("Hello World With Java1"); 
         System.out.print("Hello World With Java2\n"); 
         System.out.print("Hello World With Java3\n\n"); 
  
         // Printing Pattern without using loops or recursions using only output statements :) 
         System.out.println("*"); 
         System.out.println("*   *"); 
         System.out.println("*   *   *"); 
         System.out.println("*   *   *   *"); 
  
  
         // User Input in Java using the Scanner class of java.util package, sc is the object of the class scanner:- 
         Scanner sc = new Scanner(System.in); // just takes one character 
         String name = sc.nextLine();   // scanner class had the next() method defined within it :) 
         sc.close(); // Code works even if we dont close the sc instance or commenting out this line won't make a diffenrence in the execution of this code :) 
  
         /* For inputs of the different data types :- 
             1.> nextInt() : For int type 
             2.> nextFloat(): For floating type 
             3.> nextDouble() : For Double data type 
             4.> nextLong() : For Loing data type 
          
         */ 
         System.out.println(name); 
     } 
  
 }
