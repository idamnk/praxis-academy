DIR *.java /s /p 

IF EXIST "*.java" (
    ECHO Ada file Java pada direktori %search%

) ELSE (
    ECHO not found
)
