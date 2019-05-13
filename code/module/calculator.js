//The module of calculator

function convert(input)
{
    return parseFloat(input);
}

function add(parameter1,parameter2)
{
    return convert(parameter1) + convert(parameter2);
}

function sub(parameter1,parameter2)
{
    return convert(parameter1) - convert(parameter2);
}

function mul(parameter1,parameter2)
{
    return convert(parameter1) * convert(parameter2);
}

function div(parameter1,parameter2)
{
    return convert(parameter1) / convert(parameter2);
}

module.exports = {add,sub,mul,div};