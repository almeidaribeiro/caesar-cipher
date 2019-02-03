function test(testado, esperado) {
  if (testado === esperado) {
    console.log("Aprovado!");
    return true;
  } else {
    console.log("Reprovado!");
    return false;
  }
}

test(cipher.encode(10, "Há algo de bom neste mundo e vale a pena lutar por isso"), "Rá kvqy no lyw xocdo wexny o fkvo k zoxk vedkb zyb sccy");
test(cipher.encode(30, "um rei deve buscar o bem"), "yq vim hizi fywgev s fiq");
test(cipher.encode(200, "ABRA SEUS PORTÕES!"), "STJS KWMK HGJLÕWK!");
test(cipher.encode(100, "xp"), "tl");
test(cipher.encode(50, "Todos nós fazemos escolhas na vida."), "Rmbmq lóq dyxckmq cqamjfyq ly tgby.");
test(cipher.encode(4, "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), "E F G H I J K L M N O P Q R S T U V W X Y Z A B C D");
test(cipher.encode(70, "a b c d e f g h i j k l m n o p q r s t u v w x y z"), "s t u v w x y z a b c d e f g h i j k l m n o p q r");
test(cipher.encode(12, "! ^ ?"), "! ^ ?");

test(cipher.decode(82, "e zmhe rãs xiq kveçe wiq epkyrw hvekõiw."), "a vida não tem graça sem alguns dragões.");
test(cipher.decode(57, "Jxytz htr xtwyj?"), "Estou com sorte?");
test(cipher.decode(3, "VDLD GD PDVPRUUD"), "SAIA DA MASMORRA");
test(cipher.decode(195, "Zrh Cerpvbfb!"), "Meu Precioso!");
test(cipher.decode(376, "SY"), "GM");
test(cipher.decode(9, "! ? &"), "! ? &");
test(cipher.decode(7, "h i j k l m n o p q r s t u v w x y z a b c d e f g"), "a b c d e f g h i j k l m n o p q r s t u v w x y z");
test(cipher.decode(44, "S T U V W X Y Z A B C D E F G H I J K L M N O P Q R"), "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
