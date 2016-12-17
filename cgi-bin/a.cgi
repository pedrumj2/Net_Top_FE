#!/usr/bin/perl
print "Content-type: text/html\n\n";
print "Hello, World.\n";
print `mysql -u root -p'fafdRE\$3' -e \"Select * from mydb.packets limit 10;\" `;
print $?;
print ${^CHILD_ERROR_NATIVE};

