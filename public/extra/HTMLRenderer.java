import java.util.*;
import java.io.*;

class HTMLRenderer {
	private static void usage() {
		System.err.println("HTMLRenderer <HTML string>");
		System.exit(2);
	}

	public static void main(String[] args) throws IOException {
		if (args.length != 1) {
			usage();
		}
		String fString = args[0].substring(1, args[0].length() - 1);
		File nf = new File("render.html");
		if (nf.exists() && !nf.isDirectory()) {
			nf.delete();
		}
		nf.createNewFile();
		PrintStream out = new PrintStream(nf);
		out.println("<html><body>" + fString + "</body></html>");
		out.close();
	}
}