

import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

import seaborn as sns

def visualiseData(df):
    # show the job description
    plt.figure(figsize=(10,5))
    plt.xticks(rotation=90)
    ax=sns.countplot(x="Category", data=df)
    for p in ax.patches:
        ax.annotate(str(p.get_height()), (p.get_x() * 1.01 , p.get_height() * 1.01))
    plt.grid()
    plt.savefig('./output/output1.png')

    # show the category distribution

    targetCounts = df['Category'].value_counts()
    targetLabels  = df['Category'].unique()
    # Make square figures and axes
    plt.figure(1, figsize=(10,5))
    the_grid = GridSpec(3, 3)


    cmap = plt.get_cmap('coolwarm')
    plt.subplot(the_grid[0, 1], aspect=1, title='CATEGORY DISTRIBUTION')

    source_pie = plt.pie(targetCounts, labels=targetLabels, autopct='%1.1f%%', shadow=True)
    plt.savefig('./output/output2.png')
