REM Set Volume [0 ... 512] and 256 is 100%

curl ^
--request GET ^
--url "http://127.0.0.1:8080/requests/status.xml" ^
--user ":1812" ^
--get ^
--data-urlencode "command=volume" ^
--data-urlencode "val=256" ^
--silent ^
--output "nul" ^