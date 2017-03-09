import java.util.Scanner;
public class 실습1 {
	void run(){
		Scanner s = new Scanner(System.in);
		int number = s.nextInt();
		boolean go=true;
		while(go)
		{
			switch(number)
			{
			case 1:
				System.out.println("My name is Jaehak Lee");
				break;
			}
			case 2:
				System.out.println("I'm 23 years old and i'm in Hanyang University ERICA campus");
				break;
		}
	}
	public static void main(String[] args){
		실습1 t = new 실습1();
		t.run();
	}
}
