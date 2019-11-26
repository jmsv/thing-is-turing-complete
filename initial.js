thingIsTuringComplete = input => !(sha1(input.toString().trim().toLowerCase()).split('').filter(x=>!isNaN(x)).reduce((a,x)=>a+Number(x),0)%2)


