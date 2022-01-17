import java.util.*;
import java.util.Scanner;

class TestClass {
    public static void main(String args[]) throws Exception {

        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int a0 = 0, a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0, a9 = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '0') {
                a0++;
            } else if (s.charAt(i) == '1') {
                a1++;
            } else if (s.charAt(i) == '2') {
                a2++;
            } else if (s.charAt(i) == '3') {
                a3++;
            } else if (s.charAt(i) == '4') {
                a4++;
            } else if (s.charAt(i) == '5') {
                a5++;
            } else if (s.charAt(i) == '6') {
                a6++;
            } else if (s.charAt(i) == '7') {
                a7++;
            } else if (s.charAt(i) == '8') {
                a8++;
            } else if (s.charAt(i) == '9') {
                a9++;
            }
        }
        System.out.println("0 " + a0);
        System.out.println("1 " + a1);
        System.out.println("2 " + a2);
        System.out.println("3 " + a3);
        System.out.println("4 " + a4);
        System.out.println("5 " + a5);
        System.out.println("6 " + a6);
        System.out.println("7 " + a7);
        System.out.println("8 " + a8);
        System.out.println("9 " + a9);

    }
}
