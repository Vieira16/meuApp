import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/react';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [ddd, setDdd] = useState('');
  const [ibge, setIbge] = useState('');
  const [erro, setErro] = useState('');

  const buscarCep = async (value: string) => {
    if (value.length !== 8) return;

    try {
      setErro('');
      const res = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      const data = await res.json();

      if (data.erro) {
        setErro('CEP não encontrado');
        return;
      }

      setLogradouro(data.logradouro);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setUf(data.uf);
      setDdd(data.ddd);
      setIbge(data.ibge);
    } catch {
      setErro('Erro ao buscar CEP');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">CEP</IonLabel>
          <IonInput
            value={cep}
            inputmode="numeric"
            maxlength={8}
            onIonChange={(e) => {
              const v = e.detail.value ?? '';
              setCep(v);
              buscarCep(v);
            }}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Logradouro</IonLabel>
          <IonInput value={logradouro} onIonChange={e => setLogradouro(e.detail.value ?? '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Complemento</IonLabel>
          <IonInput value={complemento} onIonChange={e => setComplemento(e.detail.value ?? '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Bairro</IonLabel>
          <IonInput value={bairro} onIonChange={e => setBairro(e.detail.value ?? '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Cidade</IonLabel>
          <IonInput value={cidade} onIonChange={e => setCidade(e.detail.value ?? '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">UF</IonLabel>
          <IonInput maxlength={2} value={uf} onIonChange={e => setUf(e.detail.value ?? '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">DDD</IonLabel>
          <IonInput value={ddd} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">IBGE</IonLabel>
          <IonInput value={ibge} />
        </IonItem>

        {erro && <IonText color="danger">{erro}</IonText>}

        <IonButton expand="block">Enviar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
