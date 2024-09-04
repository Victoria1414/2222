#include <iostream>
using namespace std;

int main() {
    unsigned long long N;
     cin >> N;

    bool stan_turn = true;  // Вказує, чи хід Слави (true) або Олі (false)

    while (N > 1) {
      if (stan_turn) {
        N = (N + 8) / 9;  // Максимальне значення, на яке можна поділити
        } else {
        N = (N + 1) / 2;  // Мінімальне значення, на яке можна поділити
        }
         stan_turn = !stan_turn;  // Зміна черги гравця
    }

        if (!stan_turn) {
          cout << "Stan wins." << endl;
          } else {
          cout << "Ollie wins." << endl;
          }

           return 0;
}
