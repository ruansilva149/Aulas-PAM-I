import { Button, TextInput, View, Text } from "react-native-web";
import Resultado from "./Resultado";
import { useState } from "react";

export default function Form()
{
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [mensagem, setMensagem] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [buttonTitle, setButtonTitle] = useState('Calcular');

    function calcularImc()
    {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validarImc()
    {
        if(weight != null && height != null){
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMensagem('Seu IMC é igual: ')
            setButtonTitle('Calcular novamente');
            return;
        }

        setImc(null);
        setButtonTitle('Calcular');
        setMensagem('Preencha o campo peso e altura');
    }



    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput placeholder="1.75" keyboardType="numeric" onChangeText={setHeight} value={height}/>
                
                <Text>Peso:</Text>
                <TextInput placeholder="68.3 (KG)" keyboardType="numeric" onChangeText={setWeight} value={weight}/>

                <Button title={buttonTitle} onPress={()=> validarImc()}/>
            </View>
            <Resultado mensagem={mensagem} imc={imc}></Resultado>
        </View>
    );
}