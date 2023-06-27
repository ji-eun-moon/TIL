package ch06;

public class DoubleTest {

	public static void main(String[] args) {
        double dnum = 3.14;
        // float fnum = 3.14; // 오
        float fnum = 3.14F;
    
        System.out.println(dnum);
        System.out.println(fnum);
        
		double dnum2 = 1;
		
		for(int i = 0; i<10000; i++) {
			dnum2 = dnum2 + 0.1;
		}
		System.out.println(dnum2);  // 1001.000000000159 출력
	}

}
