import React from "react";

const Tables = ({ transactions }) => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <tbody>
            {
              transactions.map((transaction) => {
                return (
                  <tr>
                    <td class="flex items-center px-6 py-4 whitespace-nowrap">
                      <img
                        class="w-10 h-10 rounded-full"
                        src={transaction.image}
                        alt="transaction image"
                      />
                      <div class="text-base font-semibold pl-3">
                        {transaction.name}
                      </div>
                    </td>
                    <td class="px-6 py-4">{transaction.date}</td>
                    <td class="px-6 py-4">{transaction.cardNumber}</td>
                    <td class="px-6 py-4">{transaction.value}</td>
                    <td class="px-6 py-4">
                      {transaction.status === "Pending" ? (
                        <p className="text-[#F56565] bg-[#FEE2E2] p-2 inline-flex rounded-lg">
                          {transaction.status}
                        </p>
                      ) : transaction.status === "Success" ? (
                        <p className="text-[#61BB84] bg-[#EBFFF3] p-2 inline-flex rounded-lg">
                          {transaction.status}
                        </p>
                      ) : (
                        <p className="text-[#fd1313] bg-[#fddcd9] p-2 inline-flex rounded-lg">
                          {transaction.status}
                        </p>
                      )}
                    </td>
                  </tr>
                );
              }) 
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
