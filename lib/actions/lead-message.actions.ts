'use server';

import prisma from '../database/prisma';
import { Prisma } from '../generated/prisma';

export async function createLeadMessage(
  leadMessageData: Prisma.LeadMessageCreateInput
) {
  try {
    const leadMessage = await prisma.leadMessage.create({
      data: leadMessageData,
    });

    return {
      data: leadMessage,
    };
  } catch (error) {
    console.error(error);
    return {
      error: `Error while creating lead message, check server logs for more details.`,
    };
  }
}
