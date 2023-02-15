var tim = new Date();
var abc= tim.getDay();
var dayt;
switch(abc){
    case 0:
        dayt = "sunday";
        case 1:
            dayt="monday";
            case 2:
                dayt="tuesday";
                case 3:
                    dayt ="wednesday";
                 case 4:
          dayt="thursday";
     case 5:
     dayt="friday";
      case 6:
     dayt ="saturday";
}
console.log(dayt);