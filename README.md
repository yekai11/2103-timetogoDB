# 1. Setting up  

## VScode  

1. This project was developed in VScode. Download it here: https://code.visualstudio.com/download (may not work, best is to google ``VScode``)

## NPM  

1. To install NPM, Node.js needs to be installed on your computer. Link to download: https://nodejs.org/en/ (may not work, best is to google ``nodejs``)
2. Launch the installer and follow the steps.
3. Make sure this checkbox is ticked:  
![image](https://user-images.githubusercontent.com/97430708/203239356-d12b29e8-1187-429d-b741-77d8e46fe429.png)
4. Let node.js install
5. (optional) To ensure npm is installed, open up terminal or cmd prompt and type in ``npm -v``. Npm's version should print as below:  
![image](https://user-images.githubusercontent.com/97430708/203239958-1fbaa39f-f2e7-4fc6-bab4-8c9546c1f518.png)

## PostgresSQL  

1. Install postgres SQL version 15. Download it here: https://www.postgresql.org/download/ (may not work, best is to google ``postgres sql``)
2. Follow the steps in the installer, choose default options.
3. When prompted to set a password for 'postgres' user, set password as root
4. When prompted for a port, ensure it is port '5432'
5. Wait for the program to install
6. Once installed, search for pgadmin4 and launch it:  
![image](https://user-images.githubusercontent.com/97430708/203241473-b6bf5d1d-e7ef-44f4-a02e-535485b5bf7f.png)
7. On first launch, they will ask you to set a master password. This password can be any password you like.
8. At the top left, there should be a 'Server' for you to drop down, followed by a server. Click that until it looks like this:  
![image](https://user-images.githubusercontent.com/97430708/203242110-d012dc17-52a4-4640-99f8-6750942dd9ad.png)
9. Under Login/Group Roles, right click -> Create -> Login/Group Role... :
![image](https://user-images.githubusercontent.com/97430708/203242343-1643d678-b13d-4f6e-8f8b-855270b77d8c.png)
10. Under general, Input the Name coloumn as ``user1``. Navigate to Definition, and input password as ``root``.
11. Under Privileges, grant all privileges to ``user1`` like so:  
![image](https://user-images.githubusercontent.com/97430708/203244947-b72a643f-011c-45a8-8014-f637b7e56f45.png)
13. Click Save when done.
14. Inside this repositry, navigate to find the ``.tar`` file which is used to restore the database to your local system. Note down the location on your system, or just save the file to your downloads folder for easy access.
15. Under databases, right click -> Create -> Database... :  
![image](https://user-images.githubusercontent.com/97430708/203243404-7cc60744-4e11-435c-ab3a-164df1c34005.png)
15. Set database name under general as ``houseDB``. Click save when done.
16. Under the newly created database ``houseDB``, right click-> Restore... :  
![image](https://user-images.githubusercontent.com/97430708/203243688-604114c9-d41a-43e1-b6de-c6a49aba1ec1.png)
17. In the opened dialog box, Ensure the format is 'Custom or tar':  
![image](https://user-images.githubusercontent.com/97430708/203243874-eae9a582-92a7-416e-8b88-0dcb33f8991b.png)
18. Under Filename, click on the folder icon, and navigate to the location where the ``.tar`` file earlier is stored and open it. Ensure that the dropdown box is set to ``All Files`` as seen below:  
![image](https://user-images.githubusercontent.com/97430708/203244208-5f93a885-e515-485c-a790-9a6fd3f498fa.png)
19. Under ``Role name`` field, find and select ``user1``:  
![image](https://user-images.githubusercontent.com/97430708/203244489-b6e42265-337a-4eb9-86a2-187fb7825c1c.png)
20. Hit restore. It may take a couple of seconds, but should not be too long. There should be no errors if all the steps were followed until this point:  
![image](https://user-images.githubusercontent.com/97430708/203245183-3311fe0f-fa2a-444a-b4d1-82731ebe17cf.png)

# 2. Running the application  

1. Open up the repositry in VScode
2. Open up a terminal, and navigate to ``.\server\`` using command ``cd .\server\``
3. Run the command ``npm install``
4. In the meantime, open up a seperate instance of the terminal, and navigate to ``.\timetogodb`` using command ``cd .\timetogodb\``
5. Run the command ``npm install``, and wait for npm to download the dependencies. Here is a relevant meme while you wait: https://www.reddit.com/r/ProgrammerHumor/comments/vrtt89/everytime_i_npm_install/
6. Once all the dependencies for the server and front end has been installed, you can start the front end with the command ``npm start`` in the ``timetogodb`` terminal, but for server, use the command ``npm run dev`` in the ``server`` terminal
7. Launch pgadmin4, keep logging in until you have ``houseDB`` up and running
8. Everything should be up and running now. Congrats!
