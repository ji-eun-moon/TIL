package ch09;


public class TypeConversion {

	public static void main(String[] args) {

		double dNum = 1.2;
		float fNum = 0.9F;
		
		int iNum1 = (int)dNum + (int)fNum;
		int iNum2 = (int)(dNum + fNum);
		
		System.out.println(iNum1);
		System.out.println(iNum2);

		int num = 1000;
		byte bNum = (byte)num;
		
		double pi = 3.14;
		int fnum = (int)pi;
		
		System.out.println(bNum);
		System.out.println(fnum);
	}

}

