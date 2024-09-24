REM Togle Fullscreen

curl ^
--request GET ^
--url "http://127.0.0.1:8080/requests/status.xml" ^
--user ":1812" ^
--get ^
--data-urlencode "command=fullscreen" ^
--silent ^
--output "nul" ^