import { decryptText, encryptText } from '@/core/utils/qrypto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Crypto {
  private key =
    'c0fa1bc00531bd78ef38c628449c5102a28449c5102aeabd49b5dc3a2a516-a2a516ea6e';
  private signature =
    '28449c5102aeabd49b5dc3a2a516-a2a516ea6ea9.c628449c5102a28449c5102aeabd4';
  private ignoredColumns = [0, 26, 7, 4, 16, 3, 33, 22, 18, 12];

  public encryptTextWithRounds = (text: string, round: number) => {
    while (round > 0) {
      round--;
      text = encryptText(this.key, text, {
        igonereColumns: this.ignoredColumns,
        sign: this.signature,
      });
    }
    return text;
  };

  public decryptTextWithRounds = (text: string, round: number) => {
    let result: {
      isTrusted: boolean;
      text: string;
    } = { text, isTrusted: false };

    while (round > 0) {
      round--;
      result = decryptText(this.key, result.text, {
        igonereColumns: this.ignoredColumns,
        sign: this.signature,
      });
      if (!result.isTrusted) {
        break;
      }
    }
    return result;
  };

  private linkEncryptionRounds = 1;

  public signLink = (link: string[]) => {
    return this.encryptTextWithRounds(link.join('').replace('/', ''), this.linkEncryptionRounds);
  };

  public getLinkValidation = (signed: string) => {
    return this.decryptTextWithRounds(signed, this.linkEncryptionRounds);
  };
}
