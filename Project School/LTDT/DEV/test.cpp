
#include <stdio.h>

#define MAX 100

typedef struct {
	int n, m;
	int A[MAX][MAX];
}Graph;

void init_graph(Graph* pG, int n) {
	pG->n = n;
	pG->m = 0;
	int u, v;
	for(u = 1; u <= n; u++) {
		for(v = 1; v <=n; v++) {
			pG->A[u][v] = 0;
		}
	}
}

void add_edge(Graph* pG, int u, int v) {
	pG->A[u][v] = 1;
	pG->A[u][v] = 1;
	
	pG->m++;
}

int adjacent(Graph* pG, int u, int v) {
	return pG->A[u][v] > 0;
}

int main() {
	freopen("data.txt", "r", stdin); 
	Graph G;
	int m, n, e;
    scanf("%d%d", &n, &m);
    init_graph(&G, n);
    for (e = 1; e <= m; e++) {
        int u, v;
        scanf("%d%d", &u, &v);
        add_edge(&G, u, v);
//        G.A[u][v] = G.A[v][u] = 1;
    }
    
    int u, v;
	for(u = 1; u <= n; u++) {
		for(v = 1; v <=n; v++) {
			printf("%d ", G.A[u][v]);
		}
		printf("\n");
	}
    
    return 0;
}
