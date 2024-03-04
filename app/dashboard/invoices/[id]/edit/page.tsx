import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Invoice',
};
// export function generateStaticParams() {
//   return [
//     { id: '16c9103a-5b05-498b-be62-da9c51409b84' }, 
//     { id: '16c9103a-5b05-498b-be62-da9c51409b84' }, 
//     { id: '6799d7a1-0505-48df-9ce4-c54f427c110f' }, 
//     { id: '97c63134-3e9d-42a3-a9a8-63710c8703ae' }, 
//     { id: '623faef0-dcd1-4f04-8c01-9c005dcadf1e' },
//     { id: '4fe81744-09dc-4835-b968-8c250d70e58a' },
//     { id: 'cd7aa822-7dba-49d0-bcd6-48bfe541a050' },
//     { id: '16562f62-b65e-49bd-beb8-87d6aba0f56c' },
//     { id: '1637a40b-c806-4585-bccc-3b75f82e4860' },
//     { id: 'cdff7b32-a788-4653-941e-47cb99cce686' },
//     { id: '7f36ac5d-a1be-4dc1-a006-1a55fbc7c282' },
//     { id: '1b642015-44b8-4e04-9f55-78eb12a9cbe5' },
//   ]
// }

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;  
    const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);

    if (!invoice) {
      notFound();
    }

    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}