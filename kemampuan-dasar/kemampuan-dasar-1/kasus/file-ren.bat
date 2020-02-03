DIR *.java /s /p 

IF EXIST "*.java" (
    ECHO Ada file Java pada direktori %search%

) ELSE (
    ECHO not found
)
ECHO off
ECHO Do you want to change the name?
ECHO Enter Y for yes
ECHO Enter N for no
CHOICE /c YN /m "Yes or No"
