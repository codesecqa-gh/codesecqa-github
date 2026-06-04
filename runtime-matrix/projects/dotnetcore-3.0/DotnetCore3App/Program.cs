using System;

namespace DotnetCore3App
{
    class Program
    {
        static void Main(string[] args)
        {
            // SAST test: hardcoded password (should be flagged)
            string password = "SuperSecret123";
            Console.WriteLine("Hello World!");
        }
    }
}
