import {ApiClient} from "./clients/ApiClient";
import User from "../interfaces/User.ts";

const USUARIOS : string = '/Usuarios'


/**
 * get all users
 *
 * @return { Promise<User[]> }
 */
async function getUsers(): Promise<User[]>
{
    return (await ApiClient.get(USUARIOS)).data
}

export default {getUsers}
