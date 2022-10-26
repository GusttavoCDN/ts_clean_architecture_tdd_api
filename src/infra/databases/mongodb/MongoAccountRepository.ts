import { IAddAccountRepository } from '../../../data/contracts/IAddAcountRepository';
import { IAccount } from '../../../domain/entities/Account';
import { IAddAccountDTO } from '../../../domain/useCases/addAccount';
import { MongoHelper } from './helpers/mongo.helper';

export class MongoAccountRepository implements IAddAccountRepository {
  public async add(account: IAddAccountDTO): Promise<IAccount> {
    const accountCollection = MongoHelper.getCollection('accounts');

    const { insertedId } = await accountCollection.insertOne(account);
    console.log(insertedId.toString());
    return { id: insertedId.toString(), ...account }
  };
};