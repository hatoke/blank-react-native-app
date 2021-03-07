export default {
  //TODO buradaki tüm fonksiyonlardaki değişkenleri default bir şey yapmak lazım, obje olarak çevirilebilir

  padding(a, b, c = a, d = b) {
    return {
      paddingTop: a,
      paddingBottom: c,
      paddingRight: b,
      paddingLeft: d,
    };
  },

  margin(a, b, c = a, d = b) {
    return {
      marginTop: a,
      marginBottom: c,
      marginRight: b,
      marginLeft: d,
    };
  },

  borderRadius(a, b, c = a, d = b) {
    return {
      borderTopLeftRadius: a,
      borderTopRightRadius: c,
      borderBottomRightRadius: b,
      borderBottomLeftRadius: d,
    };
  },

  text(fontSize, color, align) {
    if (color) {
      return {
        fontSize: fontSize,
        color: color,
        textAlign: align,
      };
    } else {
      return {
        fontSize: fontSize,
        textAlign: align,
      };
    }
  },

  flex(flex, direction, ai, jc) {
    if (flex) {
      return {
        flex: flex,
        flexDirection: direction,
        alignItems: ai,
        justifyContent: jc,
      };
    } else {
      return {
        flexDirection: direction,
        alignItems: ai,
        justifyContent: jc,
      };
    }
  },
};
