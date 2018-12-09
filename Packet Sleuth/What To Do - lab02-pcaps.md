# Lab: Packet Sleuth

## Objectives

1. Learn how to read and dissect files and sensitive information (including usernames and passwords) from packet sets using open source tools
2. Work with real network traffic from arguably the world's most dangerous computer network
3. Understand the dangers of sending data over an open network unencrypted, "in-the-clear"

## Overview

You are given three sets of packet captures from three different networks in PCAP format to analyze: one from a network where file transfers occurred, one from a university network, and one from arguably the world's most hostile network, DEF CON in Las Vegas, NV.

## Instructions

Download the following PCAP files inside of your Kali Linux virtual machine:

* Set 1: http://www.cs.tufts.edu/comp/116/set1.pcap (208 KB)
* Set 2: http://www.cs.tufts.edu/comp/116/set2.pcap (64 MB. NOTE: I am not responsible for the contents in this PCAP.)
* Set 3: http://www.cs.tufts.edu/comp/116/set3.pcap (17 KB)

Open and analyze the sets of data, one at a time, using Wireshark. It is highly recommended that you also use additional open source tools (e.g., Ettercap, dsniff) for your analysis. Please answer all the questions below:

### set1.pcap

1. How many packets are there in this set?

2. What protocol was used to transfer files from PC to server?

3. Briefly describe why the protocol used to transfer the files is insecure?

4. What is the secure alternative to the protocol used to transfer files?

5. What is the IP address of the server? (be careful)

6. What was the username and password used to access the server?

7. How many files were transferred from PC to server?

8. What are the names of the files transferred from PC to server?

9. Extract all the files that were transferred from PC to server. These files must be part of your submission!

### set2.pcap

10. How many packets are there in this set?

11. How many plaintext username-password pairs are there in this packet set? Please count any anonymous or generic accounts.

12. For each of the plaintext username-password pair that you found, identify the protocol used, server IP, the corresponding domain name if possible (e.g., google.com), and port number.

**IMPORTANT NOTE: PLEASE DO NOT LOG ON TO THE WEBSITE OR SERVICE ASSOCIATED WITH THE USERNAME-PASSWORD THAT YOU FOUND!**

13. Of all the plaintext username-password pairs that you found, how many of them are legitimate? That is, the username-password was valid, access successfully granted? Please do not count any anonymous or generic accounts.

14. Provide a listing of all IP addresses with corresponding hosts (hostname + domain name) that are in this PCAP set. Describe your methodology.

### set3.pcap

15. How many plaintext username-password pairs are there in this packet set? Please count any anonymous or generic accounts.

16. For each of the plaintext username-password pair that you found, identify the protocol used, server IP, the corresponding domain name if possible (e.g., google.com), and port number.

**IMPORTANT NOTE: PLEASE DO NOT LOG ON TO THE WEBSITE OR SERVICE ASSOCIATED WITH THE USERNAME-PASSWORD THAT YOU FOUND!**

17. Of all the plaintext username-password pairs that you found, how many of them are legitimate? That is, the username-password was valid, access successfully granted? Please do not count any anonymous or generic accounts.
General Questions

18. Briefly describe how you found the username-password pairs.

19. How did you verify the successful username-password pairs?

20. What advice would you give to the owners of the username-password pairs that you found so their account information would not be revealed "in-the-clear" in the future?