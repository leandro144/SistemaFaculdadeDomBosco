import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Box, Image } from '@chakra-ui/react';
import api from '@/api/services'

export default function QRCodePage() {
  const router = useRouter();
  const { id } = router.query;
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (id) {
      const qrCodeData = {
        id: id,
      };

      const image = api[id];
      if (image) {
        setImageSrc(image);
      } else {
        setImageSrc('/caminho-para-imagem-padrão.jpg'); // Imagem padrão se o ID não for encontrado
      }

      const qrCodeURL = `https://json-diploma.onrender.com/diploma/${JSON.stringify(qrCodeData)}`;

      // Renderize o QR code
      QRCode.toDataURL(qrCodeURL)
        .then((url) => {
          setQRCodeURL(url);
        })
        .catch((error) => {
          console.error('Erro ao gerar o QR code', error);
        });
    }
  }, [id]);

  return (
    <Box maxW={'1200px'} m={'0 auto'}>
         <Image w={'100%'} h={'100vh'} src={imageSrc} alt="Imagem" />
      {qrCodeURL && <Image src={qrCodeURL} alt="QR Code" />}
    </Box>
  );
}
