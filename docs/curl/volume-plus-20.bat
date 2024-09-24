REM Incricing volume +20

curl ^
--request GET ^
--url "http://127.0.0.1:8080/requests/status.xml" ^
--user ":1812" ^
--get ^
--data-urlencode "command=volume" ^
--data-urlencode "val=+20" ^
--silent ^
--output "nul" ^