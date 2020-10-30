using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Part_02
{
    class Program
    {
        static void Main(string[] args)
        {
            int number, x, k, count = 1;

            number = 5;
            count = number - 1;
            for (k = 1; k <= number; k++)
            {
                for (x = 1; x <= count; x++)
                    Console.Write(" ");
                count--;
                for (x = 1; x<= 2 * k - 1; x++)
                    Console.Write("*");
                Console.WriteLine();
            }
            count = 1;
            for (k = 1; k <= number - 1; k++)
            {
                for (x = 1; x <= count; x++)
                    Console.Write(" ");
                count++;
                for (x = 1; x <= 2 * (number - k) - 1; x++)
                    Console.Write("*");
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
