module.exports = function zeros(expression) {

let expression_result=1n;

let cursor_position=0;
while (cursor_position < expression.length ){
  
    for (factorial_end_position=cursor_position; expression[factorial_end_position] != '*' && factorial_end_position < expression.length ;factorial_end_position++);
  
    let factorial_str = expression.substring(cursor_position, factorial_end_position);
    cursor_position = factorial_end_position+1;
    fact_step = factorial_str[factorial_str.length-2] == '!' ? 2 : 1;
    fact_start = factorial_str.substring(0, factorial_str.length - fact_step);
    
    for(fact_result = 1n; fact_start>=2; fact_start-=fact_step){
        fact_result*=BigInt(fact_start);
    }
    expression_result*=fact_result;
}

let expression_result_string = expression_result.toString();
for(res=0; expression_result_string[expression_result_string.length-1-res]=='0'&&res<expression_result_string.length; res++);
  
return res;
}

