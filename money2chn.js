export default class Currency {

    constructor() {

    }

    _cutLastFour(numberText) {
        let len = numberText.length
        if (len > 4) {
            return numberText.substr(0, len - 4)
        } else {
            return numberText
        }
    }


    _getLastFour(numberText) {
        let len = numberText.length
        if (len > 4) {
            return numberText.substr(-4)
        } else {
            return numberText
        }
    }

    toUpper(number) {
        var int_unit = ["", "拾", "佰", "仟"]
        var dec_unit = ["分", "角"]
        var section_unit = ["", "万", "亿"]

        var char_number_dict = {
            "0": "零",
            "1": "壹",
            "2": "贰",
            "3": "叁",
            "4": "肆",
            "5": "伍",
            "6": "陆",
            "7": "柒",
            "8": "捌",
            "9": "玖"
        }


        // console.log(char_number_dict["9"])

        var result = []

        var num_array = number.split('.')

        // console.log(num_array.length)

        var intPart = num_array[0]
        if (num_array.length == 1) {


            var decPart = ""
        } else {

            var decPart = num_array[1]

        }

        // console.log('deng 1')
        // console.log(intPart)

        // console.log('see down')



        let int_part_len = intPart.length

        // console.log(int_part_len)


        if (int_part_len > 0) {
            var section_count = 0
            if (int_part_len % 4 != 0) {
                section_count = parseInt(int_part_len / 4) + 1
            } else {
                section_count = parseInt(int_part_len / 4)
            }

            // console.log('secount')
            // console.log(section_count)

            var sections = []

            var tmp = intPart

            // console.log('see tmp')
            // console.log(tmp)

            // console.log('see sections')
            // console.log(sections)

            for (var i = 0; i <
                section_count; i++) {

                let str_section = this._getLastFour(tmp)



                // console.log(str_section)
                // console.log('see up')

                let str_len = str_section.length

                let one_section = {
                    strNumber: str_section,
                    strLen: str_len,
                    isZero: true,
                    hasZero: false
                }

                // console.log(one_section)
                // console.log('see up')

                sections.push(one_section)


                tmp = this._cutLastFour(tmp)

                // console.log(sections)


            }


            for (var j = 0; j < sections.length; j++) {

                var restr = ''
                var len = sections[j].strLen

                for (var i = 0; i < sections[j]["strNumber"].length; i++) {
                    var c = sections[j]["strNumber"][i]
                    if (c == "0") {

                        sections[j]["hasZero"] = true

                        len -= 1

                    } else {
                        sections[j]["isZero"] = false



                        if (sections[j]["hasZero"] == true) {
                            restr += "零"
                            sections[j]["hasZero"] = false
                        }

                        len -= 1
                        restr += char_number_dict[c] + int_unit[len]
                    }


                }


                if (!sections[j]["isZero"]) {
                    restr += section_unit[j]
                }

                result.push(restr)
            }


            result = result.reverse()


            result.push("圆")

            // console.log(result)


            //        dec part
            var dec_section = {
                strNumber: decPart,
                strLen: decPart.length,
                isZero: true,
                hasZero: false
            }


            var restr = ''
            var len = 2

            for (var i = 0; i < decPart.length; i++) {
                var c = decPart[i]
                if (c == "0") {

                    dec_section["hasZero"] = true

                    len -= 1

                } else {
                    dec_section["isZero"] = false



                    if (dec_section["hasZero"] == true &&
                        int_part_len > 0) {
                        restr += "零"
                        dec_section["hasZero"] = false
                    }

                    len -= 1
                    restr += char_number_dict[c] + dec_unit[len]
                }
            }



            result.push(restr)


            if (restr.indexOf("分") == -1) {
                result.push("整")
            }



            var upperText = ''

            // console.log('see result')
            // console.log(result)

            // var r
            for (var r in result) {
                // console.log(r)
                upperText += result[r]
            }



            console.log(upperText)
            return upperText

        }

    }


}