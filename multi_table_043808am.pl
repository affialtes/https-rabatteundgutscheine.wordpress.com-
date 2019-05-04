@ar = (1..12);
for $s(@ar){
printf "%s\t",$s * $_,foreach (@ar);
print "\n";
}