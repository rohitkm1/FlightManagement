package com.cg.error;

public class ExceptionBasic extends Exception {
	
		String message;

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public ExceptionBasic(String message) {
			super();
			this.message = message;
		}
		
		
		


}
