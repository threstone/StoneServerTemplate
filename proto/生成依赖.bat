cd ../tools/protobuf/server
node allStep
cd ../../../
copy /y common\proto\CommonProto.d.ts game_script\
copy /y common\proto\CommonProto.js game_script\

copy /y common\proto\CommonProto.d.ts ..\svn\Design\proto\
copy /y common\proto\CommonProto.js ..\svn\Design\proto\
copy /y proto\*.proto ..\svn\Design\proto\
pause
