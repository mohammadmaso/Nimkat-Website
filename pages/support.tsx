import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import TextLogo from '../componenets/logos/TextLogo';

import BaseLayout from '../layouts/BaseLayout';

export default function About() {
  return (
    <BaseLayout title={'پشتیبانی'}>
      <Stack justify="center" align="center" height="65vh">
        <Text>
          نیمکت آکادمی مجموعه آموزشی نیمکت آکادمی، در سال ۱۴۰۰ به همت جمعی از
          فارغ التحصیلان دانشگاه صنعتی شریف به منظور رفع و اصلاح نواقص آموزش
          مهارت های کاری افراد و ایجاد روش های نوین و تعاملی در زمینه کسب مهارت
          های لازم بازار کار راه اندازی شد. ما در مجموعه نیمکت آکادمی قصد داریم
          اختلاف عظیم مابین دروس تئوریک و بازار کار را کاهش دهیم، بر هیچ یک از
          افراد پوشیده نیست که حضور در بازار کار نیاز به مهارت هایی علاوه بر
          علوم دانشگاهی دارد. پلتفرم نیمکت آکادمی با رویکرد آموزش آنلاین، مجازی،
          تعاملی و مهارت محور راه اندازی شده است، اساتید انتخابی تماما از افراد
          شاخص در حوزه کسب و کار هستند، مسیر آموزش هر دوره با دقت بالایی طراحی
          شده است. ارتباط موثر مهارت آموزان پلتفرم آموزشی نیمکت آکادمی با بخش
          صنعت و کسب و کار از دیگر رسالت های ماست، قصدداریم با ایجاد شبکه ای
          گسترده راه ورود دانش آموختگانمان را به بازار کار هموارتر نماییم.
          پلتفرم تعاملی نیمکت آکادمی، با حضور و کمک شما مخاطبان میتواند ارزش
          افزوده بیشتری را ارائه نماید، بنابراین شما در هر مرحله میتوانید با
          پیشنهادات و نظرات ارزشمندتان مارا در طی این مسیر همراهی نمایید.
        </Text>
      </Stack>
    </BaseLayout>
  );
}
