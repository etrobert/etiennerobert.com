import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const portraitPath = join(process.cwd(), 'public', 'portrait.jpeg');
  const portraitBuffer = readFileSync(portraitPath);
  const portraitBase64 = portraitBuffer.toString('base64');

  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Étienne Robert
N:Robert;Étienne;;;
TEL:+33619310522
EMAIL:contact@etiennerobert.com
TITLE:Software Developer
URL:https://www.etiennerobert.com
PHOTO;ENCODING=b;TYPE=JPEG:${portraitBase64}
X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/etienne-robert-dev/
X-SOCIALPROFILE;TYPE=github:https://github.com/etrobert
END:VCARD`;

  return new NextResponse(vCard, {
    headers: {
      'Content-Type': 'text/vcard',
      'Content-Disposition': 'attachment; filename="etienne-robert.vcf"',
    },
  });
}
