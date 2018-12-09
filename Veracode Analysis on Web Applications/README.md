##  Application Name on Veracode: **Capturetheflag2018**

### Similarities:
- Cross Site Scripting Issues were similar to the ones I mentioned in my risk analysis report.
- There were about 5 issues of code injection(admin.php, update.php, plugin.php) that I mentioned in my sql     injection part. I foud this vulnerability using SQLmap.
- The SQL injection issues were similar to the ones I mentioned and were very transparent i.e. non refinement 	data issues in board.php and index.php
- Use of hardcoded password in application files.
- XSS: There was a plethora of XSS issues in the php files. I only talked about some common ones.
- Missing encryption of sesitive data: Allowing tampering of cookies.
- Directory Traversal: There were about 27 flaws that veracode detected. I clearly mentioned this issue in my 	report.

### Differences:
- CLRF injection maybe used in phpmailer.php to poison cache.
- XSS: There was a plethora of XSS issues in the php files. There were some that I was not able to figure 	   out. Thanks to veracode!
- Use of broken and risky cryptographic algorithm.
- Information Leakage(oard,index, plugin, themes) in error message: I think I missed this one. It is a low 	   risk issue. The information exposed through error mesage may result in a much intense attack.
- Untrusted initialization: A function is present that processes commandline arguments and there is an optarg 	variable to hold the additional argument and is itself an unbounded string copy. An attacker can execute a 	 command line instructon by identfying an overly long command line argument and overflowing the destination
  buffer

### What did I wish VeraCode Report provided?
In general, veracode is a really helpful system to analyze the risks present in an application. 
On the suggestions side, I think veracode should provide some more precise information 
related to the attack such as an example of the attack in action. This can be done by giving the steps to follow that can result in the attack. For example in case of directory traversal, it could've mentioned that the following urls results are exposed i.e. .git directories url rather than just stating the files in the report.
