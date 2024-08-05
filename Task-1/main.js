const prompt=require('prompt-sync')();

const sentence=prompt('Enter a sentence: ');

let result={};

sentence.split('').forEach(char=>{
  if(char>='a'&&char<='z' || char>='A'&&char<='Z') {
    if(!result[char])
      result[char]=1;
    else
      result[char]++;
  }
});

const characters=Object.keys(result);
const occurences=Object.values(result);

console.log(occurences.length);

for(let i=0;i<occurences.length;i++) {
  process.stdout.write(`${occurences[i]} `);
}

console.log();//to generate new line

for(let i=0;i<characters.length;i++) {
  if(i===0)
    process.stdout.write(`${characters[i]}:${occurences[i]}`);//to avoid putting comma at the end of line
  else
    process.stdout.write(`, ${characters[i]}:${occurences[i]}`);
}