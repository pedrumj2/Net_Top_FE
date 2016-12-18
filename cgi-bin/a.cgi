#!/usr/bin/perl


print "Content-type: text/html\n\n";
#print "o\n";







my @name_value_pairs = split /&/, $ENV{QUERY_STRING };


my @time_int = split /=/, $name_value_pairs[0];

my @start_time = split /=/, $name_value_pairs[1];


 $ti = @time_int[1];
 $st = @start_time[1];
 #print $st;

 $t2 = $st+$ti;

#$ti = 1;
#$t2 = 1331901004;
#$st = 1331901000;
#print "$st\n";
#print "$t2\n";

            
$b = GetData();
GetDistinct();

GetDis_Count();
$strNodes = PrintNodes();
#$print $strNodes;
 $strEdges = PrintEdges();
$strOptions = Options();
print "$strNodes$strEdges$strOptions\n";


#print $q->header();
#my %headers = map { $_ => $q->http($_) } $q->http();

#print $q->header('text/plain');
#print "Got the following headers:\n";
#for my $header ( keys %headers ) {
#    print "$header: $headers{$header}\n";
#}





sub PrintNodes{
  $a = `cat nodes | tail -n +2 | awk  'BEGIN {print "var nodes = new vis.DataSet(["}
                              NR > 1 {print ","}{printf  "{id: " \$3 ", value: " \$2 ", label: \\"" \$1 "\\"}"}
                        END   {print  "]);"}' `;  
                        
                         #{id: 1, value: 2, label: '192.168.1.1', color : 'rgb(238, 0, 0)', x:1, y:1},


return $a;
}

sub PrintEdges{

  $a = `cat edges | awk  'BEGIN {print "var x = document.getElementById(\\"palet\\");\\nvar edges = new vis.DataSet([\"}
                                NR > 1 {print ","}{printf  "{from : " \$4 ", to: " \$5 ", value: " \$1 "}"}
                            END   {print  "]);"}' `;  
                        
                         #{printf \"\\%s\\n\\%s\", \"var x = document.getElementById(\\"palet\\")\", \";var edges = new vis.DataSet([\"}


return $a;
}

sub Options{
 
  
  $a =     "var data = {
        nodes: nodes,
        edges: edges
    };
     var options = {
        nodes: {
          shape:'dot',
            scaling: {
            customScalingFunction: function (min,max,total,value) {
              return value/total;
            },
            min:5,
            max:60
          }
    
        }, 
        
         edges: {
            scaling: {
            customScalingFunction: function (min,max,total,value) {
              return value/total;
            },
            min:1,
            max:10
          }, 
          
          smooth: {
              type: 'continuous'
          }  
        },
       physics: false, 
       layout: {
         randomSeed:2
         }
     };
     
     var network = new vis.Network(x, data, options);";
   
    
                        
                         #{printf \"\\%s\\n\\%s\", \"var x = document.getElementById(\\"palet\\")\", \";var edges = new vis.DataSet([\"}


return $a;
}




sub GetNode_Count{
my @edges;
my $node;
$node = shift;
my $filename = 'edges';
my $sum;


  if (open(my $fh, '<', $filename)) {
    chomp( @edges = <$fh>);
    
    # print scalar @edges;
  }
  else{
    print "unable to open edges"
  }
  
  $sum =0 ; 
  foreach my $edge (@edges) { 
    my @words = split /[\s\t\ ]+/, $edge;
      if (($words[3] == $node) || ($words[4]==$node)){
        $sum = $sum + $words[0];
      } 
  } 
;
  return $sum;
   
}
#Make sure edge counts are set. This function gets the number of edges this
#node has been in
sub GetDis_Count{

my @distinct;

  my $filename = 'nodes';
  if (open(my $fh, '<', $filename)) {
 
    chomp(@distinct = <$fh>);
  }
  

  open(my $fh, ">nodes") ;
  print $fh "Node\tCount\n";
  foreach my $node (@distinct) { 

     my @words = split /[\s\t\ ]+/, $node;
    my $sum = GetNode_Count($words[0]);
    print $fh "$words[1]\t$sum\t$words[0]\tdummy\n";
  } 



}

sub GetDistinct{
   $a =  `mysql -u root -p'fafdRE\$3' -e \"
            Select t3.IP, CONCAT(ipaddr.IP1, \\".\\",  ipaddr.IP2, \\".\\", ipaddr.IP3, \\".\\", ipaddr.IP4 )
            from 
            	(
            Select distinct min as IP
            	 from 
            	(
            	select   min(packets.time) as time, Flow,ipSrc, ipDst, 
            		LEAST(ipSrc, ipDst) as min, GREATEST(ipSrc, ipDst) as max from mydb.packets
            		where time >$st and time < $t2 and ipSrc <> 1
            		  group by Flow
            	 ) t
            	 union
            	 Select distinct max as IP
            	 from 
            	(
            	select   min(packets.time) as time, Flow,ipSrc, ipDst, 
            		LEAST(ipSrc, ipDst) as min, GREATEST(ipSrc, ipDst) as max from mydb.packets
            		where time > $st and time <  $t2 and ipSrc <> 1
            		group by Flow
            	 ) t2
             ) t3
            inner join mydb.ipaddr
            on ipaddr.idIPAddr = t3.IP;\"`;   
         
     
           
           
            open(my $fh, ">nodes") ;
            print $fh $a;
             $a = `cat nodes | tail -n +2 `;
            open(my $fh, ">nodes") ;
            print $fh $a;
           # print $a;
  return $a

}

sub GetData{

   
   $a =  `mysql -u root -p'fafdRE\$3' -e \"
            select count(*), min, max, t1.IP1, t1.IP2,t1.IP3,t1.IP4,t2.IP1,t2.IP2,t2.IP3,t2.IP4 from 
            (
              select   min(packets.time) as time, Flow,ipSrc, ipDst, 
                LEAST(ipSrc, ipDst) as min, GREATEST(ipSrc, ipDst) as max from mydb.packets
              where time > $st and time <   $t2 and ipSrc <> 1
              
              group by Flow
            ) t
            inner join mydb.ipaddr t1
              on t1.idIPAddr = min
            inner join mydb.ipaddr t2
              on t2.idIPAddr = max
            group by min, max\";`;   
            
    #print "$st\n$t2\n";
  # print "\"$a\"";
  # print "test edges";
   my $fh;
            open( $fh, ">edges");
   #     print "test edges";
            print $fh $a;
            $a = `cat edges | tail -n +2 |
             awk  '{print \$1\"\t\"\$4\"\.\"\$5\"\.\"\$6\"\.\"\$7\"\t\"\$8\"\.\"\$9\"\.\"\$10\"\.\"\$11 \"\t\"\$2 \"\t\" \$3}'`;
              open($fh, ">edges") ;
              
              print $fh $a;
            #  print "cat edges";
            #  $a =  `cat edges`;
          #    print $a;
        #  print $a;
  return $a

}

